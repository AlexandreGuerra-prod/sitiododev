export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request?.json?.();
    const name = data?.name ?? '';
    const email = data?.email ?? '';
    const message = data?.message ?? '';

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, message: 'Todos os campos são obrigatórios.' },
        { status: 400 }
      );
    }

    // Save to database
    await prisma.contactSubmission.create({
      data: { name, email, message },
    });

    // Send email notification
    try {
      const appUrl = process.env.NEXTAUTH_URL || '';
      let senderEmail = 'noreply@mail.abacusai.app';
      try {
        senderEmail = `noreply@${new URL(appUrl).hostname}`;
      } catch {}

      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00bcd4; border-bottom: 2px solid #00bcd4; padding-bottom: 10px;">
            Nova mensagem de contato
          </h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nome:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Mensagem:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #00bcd4;">
              ${message?.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            Enviado em: ${new Date().toLocaleString('pt-BR')}
          </p>
        </div>
      `;

      await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deployment_token: process.env.ABACUSAI_API_KEY,
          app_id: process.env.WEB_APP_ID,
          notification_id: process.env.NOTIF_ID_FORMULRIO_DE_CONTATO,
          subject: `Nova mensagem de ${name} - Site Alexandre Guerra`,
          body: htmlBody,
          is_html: true,
          recipient_email: 'guerra7@gmail.com',
          reply_to: email,
          sender_email: senderEmail,
          sender_alias: 'Alexandre Guerra - Site',
        }),
      });
    } catch (emailError: any) {
      console.error('Erro ao enviar email:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({ success: true, message: 'Mensagem enviada com sucesso!' });
  } catch (error: any) {
    console.error('Erro no contato:', error);
    return NextResponse.json(
      { success: false, message: 'Erro interno. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
