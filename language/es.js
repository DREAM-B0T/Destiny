// voice command 
exports.vnCmd = (v) => {
  return 'Usar comandos con notas de voz, activar con el comando ' + v + 'voicecommand on/off';
};

// -- enviar mensaje 
exports.wait = `[โ] ๐ฟ๐๐๐๐๐๐๐๐๐ โฌโฌโฌโญ`;
exports.bye = `[๐ค]โธบ Iras a dormir.`;
exports.done = `[โ๏ธ ๐๐๐๐๐ค โ๏ธ]`;
exports.next = (value) => {
  return `Haga click en siguiente para *${value}* `;
};
exports.packon = '[๐ธ] Nombre del paquete ya registrado';
exports.packoff = '[โ] Nombre del paquete en medios no esta regristrado';
exports.liston = '[โ๏ธ] Lista de medios almacenados en la base de datos';
exports.getlist = '[๐ธ] Use el comando getimg/getvid/getav/getstik para enviar un paquete de un medio\n\nEjemplo : /getimg auron';
exports.nolink = (value) => {
  return '[๐ธ] Repita agregando un enlace ' + value;
};
//--new
exports.lvl = `Nivel`;
exports.nme = `Nombre`;
exports.hi = `Hola`;
exports.gp = `Grupo`;
exports.restart = `[๐น]โธบ ๐๐ฏ๐ต๐ฆ๐ฏ๐ฅ๐ช๐ฅ๐ฐ.`;
exports.pinsp = `Velocidad`;
exports.pinse = `Segundos`;
exports.num = `Numero`;
exports.click = `Click aquรญ`;
exports.next2 = `Siguiente`;
exports.stima = `[๐ธ] Envia una imagen con el comando\n o etiqueta una imagen que se haya enviado, *Videos 1-9 segundos* `;
exports.resulf = `[๐ธ] Resultado`; 
exports.bugr = `Gracias\nSu reporte ha sido almacenada en la base de datos. `;
exports.linkgp = `Link del Grupo `;
exports.linkrevo = `Enlace del grupo anulado`;
exports.newlink = `Nuevo enlace`;
exports.gpbt = `[๐น]โธบ Configuraciรณn del grupo\nAbrir y cerrar el grupo`;
exports.gpbtt = `A continuaciรณn elija uno`;
exports.gpopenb = `๐ธ> Abrir`;
exports.gpcloseb = `๐ข> Cerrar`;
exports.idiom = `Idioma`;
exports.wrn = `Advertencia`;
exports.pfile = `PERFIL`;
exports.crtio = `Se creรณ el`;
exports.mbr = `Miembros`;
exports.wlme = `Bienvenida`;
exports.vtc = `VOTACION`;
exports.rzon = `Razon`;
exports.vyes = `Si estas de acuerdo`;
exports.vno = `Si no estas de acuerdo`;
exports.vrvt = `Ver Votaciones`;
exports.rtvt = `RESULTADOS DE VOTACION`;
exports.dlte = `Eliminar`;
exports.setpmulti = `|๐ธ| Se cambio el prefijo a : *multiprefijo*`;
exports.setpnopre = `|๐ธ| Se cambiรณ de prefijo a : *nopref*`;
exports.setponepre = `|๐ธ| Se cambio el prefijo a :`;
exports.setpall = `|๐ธ| Prefijos Disponibles`;
exports.setpnp = `|๐ธ| Sin prefijo`;
exports.setpop = `|๐ธ| Un prefijo`;
exports.setpmt = `|๐ธ| Multi prefijo`;
exports.updatef = `*Actualizado*\n\nInforme`;
exports.simn = `|๐ธ| Quieres charlar un rato?\n\nResponde con`;
exports.simmsg = `|๐ธ| (Tu mensaje)\n\n Ejemplo : `;
exports.chatboton = `|๐ธ| Activaste *ChatBot* \n Lo que significa que ahora puedo charlar contigo.`;
exports.chatbotoff = `|๐ธ| *ChatBot* desactivado.`; 
exports.pptt = `Seleccione`;
exports.exple = `Ejemplo`;
exports.emt = `Empate`;
exports.gst = `Ganaste`;
exports.pdt = `Perdiste`;
exports.pptuser = `Tรบ`;
exports.papel = `papel`;
exports.tijera = `tijera`;
exports.piedra = `piedra`;
exports.foll = `Informame de cualquier error. wa.me/593987516808`;
exports.plays = `Ingresa el tรญtulo de una canciรณn`;
exports.playm = `El archivo es demasiado grande, la reproducciรณn de mรบsica se cancelรณ, el tamaรฑo mรกximo del archivo es de`;
exports.listgp = `LISTA de Grupos`;
exports.calidad = `Calidad`;
exports.tamaรฑo = `Tamaรฑo`;
exports.pfo = `Elija un formato\n\nSi tiene problemas  con el comando use`;
exports.pafo = `Seleccione la mรบsica que desea descargar`;
exports.pvfo = `Seleccione el video que desea descargar`;
exports.titlp = `Tรญtulo`;
exports.timp = `Duraciรณn`;
exports.viep = `Vistas`;
exports.vcnrst = 'No detectado';
exports.vclect = 'Lectura de voz';
exports.listwb = 'Lista de eventos';
exports.pregt = 'Pasare el aรฑo?';
exports.donate = `
โโโโโโโโโโโโโโโโโ
*โฐ ๐ฎ โฏ PREMIUM:*
Si quieres conseguir Premium deberas seguir unos cuantos pasos.

Tu actividad en el grupo como tu participacion en eventos son fundamentales. . .

Los requisitos minimos son:

Tener almenos 3000 mensajes no SPAM.
Actividad seguida.
Participacion en eventos.
3500 COINS

Algunas de las ventajas premium son poder usar comandos de Administradores o la facilidad de que el BOT descargue musica o videos por ti.
โโโโโโโโโโโโโโโโโ`;
exports.cretb = 'Crea tu propio BOT:';

// -- Decir tiempo
exports.night = '-`๐ยด- ๐ต๐ข๐๐๐๐? ๐๐๐โ๐๐?'
exports.evening = '-`๐ยด- ๐ต๐ข๐๐๐๐? ๐๐๐๐๐๐?'
exports.day = '-`๐๏ธยด- ๐ต๐ข๐๐ ๐ท๐๐'
exports.morning = '-`๐ยด- ๐ต๐ข๐๐๐๐? ๐ท๐๐๐?'


// -- mensaje solo 
exports.admin = '|โ?๏ธ| Este comando solo lo pueden usar los *Admins* del grupo.';
exports.group = '|โ๏ธ| ยกEste comando solo se puede usar en grupos!.';
exports.premium = '|โ๏ธ| Este comando es solo para miembros *Premium*.';
exports.premdl = '|โ๏ธ| Lo siento, no eres un usuario premium, descรกrgualo usando el enlace.\n**๐ Link* : ';
exports.botadmin = '|โ?๏ธ| ยกPara usar este comando debo ser *Administradora!.*';
exports.owner = '|๐ธ| Esta funciรณn es solo la puede usar *Mi Maestro.*';
exports.isprem = '|๐ธ| El usuario es el usuario premium anterior.';
exports.noprem = '|๐ธ| El usuario aรบn no es un usuario premium.';
exports.ban = '|โ๏ธ| El estado de usuario ha sido prohibido antes.';
exports.noban = '|๐ธ| El usuario no tiene estado prohibido.';
exports.isadmin = '|โ๏ธ| El bot no puede iniciar sesiรณn como administrador.';
exports.oversize = 'โ?๏ธ El tamaรฑo del archivo excede el tamaรฑo especificado, descรกrguelo usted mismo a travรฉs del siguiente enlace.\n*๐ Link* : ';

// -- texto
exports.notag = '|๐ธ| Etiqueta a un miembro del grupo';
exports.nonum = '|๐ธ| Repita agregando el nรบmero de destino';
exports.notext = '|๐ธ| Repita agregando texto';
exports.reply = '|๐ธ| Responde a un mensaje...';
exports.replyStic = '|๐ธ| Responde a un sticker...';
exports.replyVid = '|๐ธ| Responde a un vide...';
exports.replyVn = '|๐ธ| Responde a un audio...';
exports.replyImg = '|๐ธ| Responde a una imagen...';
exports.noreply = '|๐ธ| El mensaje al que respondiรณ no contenรญa una respuesta.';
exports.nolink = (value) => {
  return `|๐ธ| Repita agregando un enlace de *${value}*.`;
};
exports.addwarn = `|โ?๏ธ| *ADVERTENCIA*\nObtienes 1 advertencia`;
exports.delwarn = `|๐ธ| *SIGUE ASI!*\nSe redujo tu advertencia`;
exports.cekwarn = (warn) => {
  return `|โ?๏ธ| ADVERTENCIAS \n\nโฎ Total  : *${warn}*`;
};
exports.nowarn = `|๐ธ| El usuario no tiene ninguna advertencia, bien hecho.`;

exports.Pbahasa = `|๐ธ| Seleccione el idioma que desea utilizar.
*Idiomas disponibles:*
- es (Spanish) 
- en (English)
Ejemplo : */language en*`;
exports.nobahasa = `|๐ข| Idioma no disponible.

*Idiomas disponibles*

- es (Spanish) 
- en (English)`;

exports.online = 'โ๐ธโ Orden recibida, me he activado en este grupo.'
exports.offline = 'โ๐ธโ Orden recibida, me he desactivado en este grupo.'

// -- grupo
exports.onwa = 'โ๐ธโ El Usser ya se encuentra en el grupo.';
exports.sendlink = 'โ Envรญa una invitaciรณn a';
exports.open = '[๐ธ] Grupo abierto\n\nAhora *todos los Ussers* pueden escribir.';
exports.close = '[๐ธ] Grupo cerrado\n\nAhora *solo los Administradores* pueden escribir.';
exports.name = (value) => {
  return `โ๐ธโ Se ha cambiado el nombre del grupo a: \n\n${value}.`;
};
exports.desk = (value) => {
  return `โ๐ธโ Se ha cambiado la desc a: \n\n${value}.`;
};
exports.promote = (value) => {
  return `โ๐ธโ  *${value}* Fue promovido como Administrador.`;
};
exports.demote = (value) => {
  return 'โ๐ธโ Orden recibida.' + value;
};

exports.kick = (value) => {
  return 'โ๐ธโ Orden recibida.'+value;
};
exports.On = (value) => {
 return `โ๐ธโ Orden recibida, *${value}* en este grupo.`;
};
exports.Off = (value) => {
  return `โ๐ธโ Orden recibida, *${value}* desactivado para este grupo.`;
};
exports.Thison = (value) => {
  return `โ๐ธโ *${value}* ya esta activo.`;
};
exports.Thisoff = (value) => {
return `โ๐ธโ *${value}* ya se ha desactivado.`;
};
exports.OnorOff = 'โ๐ธโ Repita agregando on/off.';
exports.antilink = '[โ?๏ธ] Se te ha detectado un enlace de un grupo de WhatsApp.';

exports.setwel = (value) => { 
  return `โ๐ธโ Ingrese el mensaje de *Bienvenida:*
  
*Ejemplo:*

/setwelcome Bienvenido @user a @group.

Tag Usser : @user 
Nombre : @name
Bio : @bio
Fecha : @date
Nombre de Grupo : @group
Descripciรณn : @desc
*Ejemplos para cada funciรณn*\n` + value;
};

exports.setbye = (value) => {
  return `โ๐ธโ Ingrese el mensaje de *Despedida:*
  
* Ejemplo:*
/setbye Adios  @user

*Ejemplos para cada funciรณn*\n` + value;
};

exports.setweldone = (value, fungsi) => {
  return `โ๐ธโ Se estableciรณ como  *Bienvenida*.`;
};

exports.setbyedone = (value, fungsi) => {
  return `โ๐ธโ Se estableciรณ como  *Despedida*.`;
};
//--
exports.default = (value) => {
  return value + 'โ๐ธโ Se ha devuelto a la configuracion inicial.';
};

exports.main = (value) => {
  return 'โ๐ธโ Todavรญa hay un ' + value + ' en curso.';
};
exports.nomain = (value) => {
  return `โ๐ธโ No hay *${value}* en curso.`;
};
exports.inmain = (value) => {
  return `โ๐โ Ya has Votado *${value}*.`
};
exports.hapus = (value) =>{
  return `โ๐ธโ Se eliminรณ *${value}* en este grupo.`;
};

// juegos
exports.onGame = 'โโ?๏ธโ Todavรญa hay preguntas sin respuesta en este chat.';
exports.soal = (text1, text2, text3) => {
  return `${text1}
โญโโโข เณโขโงเนโกเนโงโขเณ โขโโโฎ

*Tiempo:*

${text2}
*Recompensa:*

${text3} Coins.

Responde este mensaje para responder,
La pista de respuesta aparece en los รบltimos 10 segundos.


๐น๐ข๐๐ข๐ฐ๐ฑ๐ฆ๐ซ๐ถ ๐๐ซ๐ก ๐๐ฏ๐ข๐๐ช๐ฆ๐ซ๐ค๐?๐

โฐโโโข เณโขโงเนโกเนโงโขเณ โขโโโฏ`;
};

exports.timeout = '|โ| Se acabรณ el tiempo, la respuesta es ';
exports.salah = '|โ| *ยกIncorrecto!*\nIntenta otra vez';
exports.hampir = '|๐ธ| Casi lo logras* \nSigue intentando!';
exports.benar = (value, value2) => {
  return `|โ| Respuesta correcta!\n\nโฃ Ganaste : *${value2}* Coins.`;
};

// afk
exports.with = 'โฃ Razรณn : ';
exports.onAfk = (value) => {
  return `โ๐ธโAFK \nEstas AFK hasta que envies un mensaje\n${value}`
};
exports.offAfk = '|๐ธ| Regresaste del *AFK*'
exports.inAfk = (value, time) => {
  return `โ๐ธโ El usuario al que mencionas estรก AFK.  \n${value}\nโฃ Desde : ${time} `
}
