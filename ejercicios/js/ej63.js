let anio = 2015;
let campeon;

switch (anio) {
    case 2000:
        campeon = "(Clausura) River Plate - (Apertura) Boca Juniors";
        break;
    case 2001:
        campeon = "(Clausura) San Lorenzo de Almagro - (Apertura) Racing Club";
        break;
    case 2002:
        campeon = "(Clausura) River Plate - (Apertura) Independiente";
        break;
    case 2003:
        campeon = "(Clausura) River Plate - (Apertura) Boca Juniors";
        break;
    case 2004:
        campeon = "(Clausura) River Plate - (Apertura) Newell's Old Boys";
        break;
    case 2005:
        campeon = "(Clausura) Vélez Sarsfield - (Apertura) Boca Juniors";
        break;
    case 2006:
        campeon = "(Clausura) Boca Juniors - (Apertura) Estudiantes de La Plata";
        break;
    case 2007:
        campeon = "(Clausura) San Lorenzo de Almagro - (Apertura) Lanús";
        break;
    case 2008:
        campeon = "(Clausura) River Plate - (Apertura) Boca Juniors";
        break;
    case 2009:
        campeon = "(Clausura) Vélez Sársfield - (Apertura) Bánfield";
        break;
    case 2010:
        campeon = "(Clausura) Argentinos Juniors - (Apertura) Estudiantes de La Plata";
        break;
    case 2011:
        campeon = "(Clausura) Vélez Sársfield - (Apertura) Boca Juniors";
        break;
    case 2012:
        campeon = "(Clausura) Arsenal F.C. - (Torneo Inicial) Vélez Sarsfield";
        break;
    case 2013:
        campeon = "(Torneo Final) Newells Old Boys - (Campeón del Campeonato de Primera División 2012/13) - Vélez Sarsfield - (Torneo Inicial) San Lorenzo de Almagro";
        break;
    case 2014:
        campeon = "(Torneo Final) River Plate - (Torneo Inicial) Racing Club";
        break;
    case 2015:
        campeon = "(Campeonato de Primera División) Boca Juniors";
        break;
    case 2016: 
        campeon = "(Campeonato de Primera División) Lanús";
        break;
    case 2017:
        campeon = "(Campeón del Campeonato de Primera División 2016/17) Boca Juniors";
        break;
    default:
        campeon = null;
}

switch (campeon) {
    case null: 
        console.log("Por favor ingrese un año entre 2000 y 2017");
        break;
    default:
        console.log(`En el año ${anio} salió campeón ${campeon}`);
}