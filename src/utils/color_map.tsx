const type_to_color = new Map<string, string>([
    ["normal", "#AAAA79"],
    ["fire", "#F1812D"],
    ["water", "#6891F1"],
    ["grass", "#79C94F"],
    ["electric", "#F8D22D"],
    ["ice", "#99D9D9"],
    ["fighting", "#C12C23"],
    ["poison", "#A23DA2"],
    ["ground", "#E1C268"],
    ["flying", "#AA91F0"],
    ["psychic", "#F85889"],
    ["bug", "#A9BA1A"],
    ["rock", "#BAA135"],
    ["ghost", "#715799"],
    ["dragon", "#7135F8"],
    ["dark", "#715747"],
    ["steel", "#B9B9D1"],
    ["fairy", "#FF9CE2"],
]);

const getTransparent = (hex:any) => {
    var c:any;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length === 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.7)';
    }
    return 'white'
}


const convertTypeColor = (types : any, filter : boolean)=> {
    if (types[0] === null) return "white"
    if (filter) {
        let hex = type_to_color.get(types[0])
        return getTransparent(hex)
    } 
    let background:string = ""
    if (types.length > 1) {
        let color1 = type_to_color.get(types[0])
        let color2 = type_to_color.get(types[1])
        background = `linear-gradient(45deg, ${getTransparent(color1)}, 40%, ${getTransparent(color2)} 70%)`;
    } else {
        let color = type_to_color.get(types[0])
        background = color == null ? "white" : color;
        background = getTransparent(background)
    }
    return background
}


export {type_to_color, getTransparent, convertTypeColor}