import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, contact, message } = await request.json();

    // Саяны олдсон утгуудыг заавал хашилтанд (' ') хийж String болгоно
    const TELEGRAM_TOKEN = '8814840357:AAEIwGoNwE-M_2tvT2aBxg6iXe9_i4z5658'; 
    const TELEGRAM_CHAT_ID = '5112948214'; 

    const telegramMessage = `
🔔 *ШИНЭ ЗАХИАЛГЫН ХҮСЭЛТ* 🔔

👤 *Нэр:* ${name}
📞 *Холбоо барих:* ${contact}
💬 *Мессеж:* ${message}
    `;

    // Хаягийг уншигдахуйц зөв бүтцээр нэгтгэв
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
    
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: "Markdown",
      }),
    });

    const resData = await response.json();

    if (!response.ok) {
      console.error("Телеграм алдаа:", resData);
      throw new Error("Телеграм сервер хүсэлтийг буцаалаа.");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Сервер талын алдаа:", error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
