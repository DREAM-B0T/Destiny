exports.menu = (v) => {
  return `
  ───── ❝ *MAIN* ❞ ─────

╭─˚ ༘✶ ⋆｡ ⁀➷─────────
│  .bot (texto)
│ ┌━━━
│ │ Puedes hablar con el
┃ ▢ BOT y tambien enseñarle
┃ │ a hablar.
┃ └━━━
╰──────────────╮
╭──˚ ༘✶ ⋆｡ ⁀➷───────╯
│  .info
│ ┌━━━
│ │ Ve la info del BOT.
│ │
│ └━━━
╰──────────────╮
╭──˚ ༘✶ ⋆｡ ⁀➷───────╯
│  .ping
│ ┌━━━
│ │ Ping del Bot.
│ └━━━
╰──────────────╮
╭──˚ ༘✶ ⋆｡ ⁀➷───────╯
│  .owner
│ ┌━━━
│ │ Contacto de mi creador.
│ └━━━
╰──────────────╮

  ───── ❝ *FUN* ❞ ─────
  
╭──˚ ༘✶ ⋆｡ ⁀➷───────╯
│  .fake text|@user|text
│ ┌━━━
│ │ Creo un texto falso
│ │ respondiendo a un
│ │ mensaje falso de un
│ │ integrante.
┃ └━━━
╰──────────────╮
╭──˚ ༘✶ ⋆｡ ⁀➷───────╯
│  .preg (texto)
│ ┌━━━
│ │ Respondo una pregunta.
│ └━━━
╰──────────────────────╮

  ───── ❝ *GAMES* ❞ ─────

╭──˚ ༘✶ ⋆｡ ⁀➷───────╯
│  .verdad
│ ┌━━━
│ │ Te mando una verdad.
│ └━━━
╰──────────────╮
╭──˚ ༘✶ ⋆｡ ⁀➷───────╯
│  .reto
│ ┌━━━
│ │ Te mando un reto.
│ └━━━
╰──────────────╮
╭──˚ ༘✶ ⋆｡ ⁀➷───────╯
│  .ppt
│ ┌━━━
│ │ Jugamos piedra, papel
│ │ o tijera.
│ └━━━
╰───────────────────────

  ───── ❝ *STICKER* ❞ ─────

╰──────────────╮
╭──˚ ༘✶ ⋆｡ ⁀➷───────╯
  .s
  
  Crea un sticker
  etiquetando una imagen
  o un video que dure
  menos de 10sec.
  
╰──────────────╮
╭──˚ ༘✶ ⋆｡ ⁀➷───────╯

  .toim
  
  Convierte un sticker
  a una imagen.
  
╰──────────────╮
╭──˚ ༘✶ ⋆｡ ⁀➷───────╯

  .take nombre|autor
  
  Roba un sticker.
╰──────────────╮

  ───── ❝ *TOOLS* ❞ ─────

╭──˚ ༘✶ ⋆｡ ⁀➷───────╯

  .afk (Razón)
  
  Estaras AFK hasta que
  el BOT envies un 
  mensaje.
  
╰──────────────╮
╭──˚ ༘✶ ⋆｡ ⁀➷───────╯

  .fakethumb
  
  Crea una imagen.

╰──────────────╮
╭──˚ ༘✶ ⋆｡ ⁀➷───────╯

  .tomp3
  
  Convierte un video a
  un audio.

╰──────────────╮
╭──˚ ༘✶ ⋆｡ ⁀➷───────╯

  .toav
  
  Convierte un audio a
  video.

╰──────────────╮
╭──˚ ༘✶ ⋆｡ ⁀➷───────╯

  .say (texto)
  
  Repito lo que dijiste.

╰──────────────╮
╭──˚ ༘✶ ⋆｡ ⁀➷───────╯

  ───── ❝ *SEARCH* ❞ ─────

╭──˚ ༘✶ ⋆｡ ⁀➷───────╯

  .ytsearch (Busqueda)
  
  Busco lo que me pidas 
  en YouTube.

╰──────────────╮
╭──˚ ༘✶ ⋆｡ ⁀➷───────╯

  .google (Busqueda)
  
  Busco lo que me pidas
  en Google.
 
 
╰──────────────╮
╭──˚ ༘✶ ⋆｡ ⁀➷───────╯

  .playstore
  
  Busco lo que me pidas
  en PlayStore.

╰──────────────╮
╭──˚ ༘✶ ⋆｡ ⁀➷───────╯

┌─⊷ *DOWNLOAD* 
▢ ${v}play
▢ ${v}play2
▢ ${v}playvid
▢ ${v}ytmp3 <link yt>
▢ ${v}ytmp4 <link yt>
▢ ${v}igdl <link>
▢ ${v}tiktok <link>
▢ ${v}tiktoknowm <link>
▢ ${v}tiktokaudio <link>
▢ ${v}mediafire <link>
└─────────────
┌─⊷ *TEXT MAKER*
▢ ${v}nameninja <text>
▢ ${v}typewriter <text>
▢ ${v}blackpill <text>
▢ ${v}sans <text>
▢ ${v}castle <text>
└─────────────
┌─⊷ *DATABASE* 
▢ ${v}addimg <text>
▢ ${v}addvid <text>
▢ ${v}addstick <text>
▢ ${v}addav <text>
▢ ${v}getimg <text>
▢ ${v}getvid <text>
▢ ${v}getstick <text>
▢ ${v}getav <text>
▢ ${v}listmedia
└─────────────
┌─⊷ *VOTING* 
▢ ${v}voting <text>
▢ ${v}delvote
▢ ${v}checkvote
└─────────────
┌─⊷ *ADMIN* 
▢ ${v}setwelcome
▢ ${v}setbye
▢ ${v}delwelcome
▢ ${v}delbye
▢ ${v}simulate <welcome/bye>
▢ ${v}group <open/close>
▢ ${v}resetlink
▢ ${v}banchat
▢ ${v}unbanchat
▢ ${v}hidetag
▢ ${v}notify
▢ ${v}tagall
▢ ${v}setppgp
▢ ${v}setname <text>
▢ ${v}setdesc <text>
▢ ${v}add <numero>
▢ ${v}kick @user
▢ ${v}promote @user
▢ ${v}demote @user
▢ ${v}warn @user
▢ ${v}delwarn @user
▢ ${v}warns @user
└─────────────
┌─⊷ *GRUPO*
▢ ${v}welcome on/off
▢ ${v}antidelete on/off
▢ ${v}detect on/off
▢ ${v}antilink on/off
▢ ${v}link
▢ ${v}infogp
▢ ${v}profile
▢ ${v}invite <549xxxx> 
└─────────────
┌─⊷ *OWNER* 
▢ ${v}addpremium @user
▢ ${v}delpremium @user
▢ ${v}ban @user
▢ ${v}unban @user
▢ ${v}view
▢ ${v}grouplist
▢ ${v}update
▢ ${v}setppbot
▢ ${v}setfakethumb
▢ ${v}setprefix
▢ ${v}listreport
▢ $
▢ >
└─────────────`;
};

exports.menuVC = `
┌─⊷ *MAIN* 
▢ menu
└─────────────
┌─⊷ *BUSQUEDA*
▢ google
└─────────────
┌─⊷ *DOWNLOAD* 
▢ play
└─────────────`;
