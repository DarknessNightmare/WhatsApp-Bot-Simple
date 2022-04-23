let handler = async(m, { conn, text, message }) => {
	   let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
	    if (!text) throw `tag orang yang mau di add`
		await conn.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
handler.help = ['add'].map(v => v + ' @user')
handler.tags = ['group']
handler.command = /^(add)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true

module.exports = handler

const jsonformat = (string) => {
    return JSON.stringify(string, null, 2)
}