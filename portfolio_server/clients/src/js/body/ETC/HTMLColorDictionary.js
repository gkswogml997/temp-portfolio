import React from "react";

class MakeTable extends React.Component{
    render() {
        const tableStyle = {
            backgroundColor: this.props.color
        }

        return (
            <tr>
                <td style={tableStyle}></td>
                <td>{this.props.name}</td>
                <td>{this.props.color}</td>
            </tr>
        );
    };
}

class HTMLColorDictionary extends React.Component {
    render() {
        const textStyle = {
            textAlign: "center"
        }
        return (
            <>
                <h1 style={textStyle}>HTML 색상코드</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12" style={textStyle}>
                            <table className="table table-bordered" align="center" style={{width: "50%"}}>
                                <tbody>
                                    <tr>
                                        <th>색</th>
                                        <th>색이름</th>
                                        <th>HEX</th>
                                    </tr>
                                    <MakeTable color="#ffffff" name="White"/>
                                    <MakeTable color="#fffafa" name="Snow"/>
                                    <MakeTable color="#f0fff0" name="Honeydew"/>
                                    <MakeTable color="#f5fffa" name="MintCream"/>
                                    <MakeTable color="#f0ffff" name="Azure"/>
                                    <MakeTable color="#f0f8ff" name="AliceBlue"/>
                                    <MakeTable color="#f8f8ff" name="GhostWhite"/>
                                    <MakeTable color="#f5f5f5" name="WhiteSmoke"/>
                                    <MakeTable color="#fff5ee" name="Seashell"/>
                                    <MakeTable color="#f5f5dc" name="Beige"/>
                                    <MakeTable color="#fdf5e6" name="OldLace"/>
                                    <MakeTable color="#fffaf0" name="FloralWhite"/>
                                    <MakeTable color="#fffff0" name="Ivory"/>
                                    <MakeTable color="#faebd7" name="AntiqueWhite"/>
                                    <MakeTable color="#faf0e6" name="Linen"/>
                                    <MakeTable color="#fff0f5" name="LavenderBlush"/>
                                    <MakeTable color="#ffe4e1" name="MistyRose"/>
                                    <MakeTable color="#fff8dc" name="Cornsilk"/>
                                    <MakeTable color="#ffebcd" name="BlanchedAlmond"/>
                                    <MakeTable color="#ffe4c4" name="Bisque"/>
                                    <MakeTable color="#ffdead" name="NavajoWhite"/>
                                    <MakeTable color="#f5deb3" name="Wheat"/>
                                    <MakeTable color="#deb887" name="Burlywood"/>
                                    <MakeTable color="#d2b48c" name="Tan"/>
                                    <MakeTable color="#bc8f8f" name="RosyBrown"/>
                                    <MakeTable color="#f4a460" name="SandyBrown"/>
                                    <MakeTable color="#daa520" name="Goldenrod"/>
                                    <MakeTable color="#b8860b" name="DarkGoldenrod"/>
                                    <MakeTable color="#cd853f" name="Peru"/>
                                    <MakeTable color="#d2691e" name="Chocolate"/>
                                    <MakeTable color="#8b4513" name="SaddleBrown"/>
                                    <MakeTable color="#a0522d" name="Sienna"/>
                                    <MakeTable color="#a52a2a" name="Brown"/>
                                    <MakeTable color="#800000" name="Maroon"/>
                                    <MakeTable color="#ffa07a" name="LightSalmon"/>
                                    <MakeTable color="#fa8072" name="Salmon"/>
                                    <MakeTable color="#e9967a" name="DarkSalmon"/>
                                    <MakeTable color="#f08080" name="LightCoral"/>
                                    <MakeTable color="#cd5c5c" name="IndianRed"/>
                                    <MakeTable color="#dc143c" name="Crimson"/>
                                    <MakeTable color="#b22222" name="Firebrick"/>
                                    <MakeTable color="#8b0000" name="DarkRed"/>
                                    <MakeTable color="#ff0000" name="Red"/>
                                    <MakeTable color="#ff4500" name="OrangeRed"/>
                                    <MakeTable color="#ff6347" name="Tomato"/>
                                    <MakeTable color="#ff7f50" name="Coral"/>
                                    <MakeTable color="#ff8c00" name="DarkOrange"/>
                                    <MakeTable color="#ffa500" name="Orange"/>
                                    <MakeTable color="#ffff00" name="Yellow"/>
                                    <MakeTable color="#ffffe0" name="LightYellow"/>
                                    <MakeTable color="#fffacd" name="LemonChiffon"/>
                                    <MakeTable color="#fafad2" name="LightGoldenrodYellow"/>
                                    <MakeTable color="#ffefd5" name="PapayaWhip"/>
                                    <MakeTable color="#ffe4b5" name="Moccasin"/>
                                    <MakeTable color="#ffdab9" name="PeachPuff"/>
                                    <MakeTable color="#eee8aa" name="PaleGoldenrod"/>
                                    <MakeTable color="#f0e68c" name="Khaki"/>
                                    <MakeTable color="#bdb76b" name="DarkKhaki"/>
                                    <MakeTable color="#ffd700" name="Gold"/>
                                    <MakeTable color="#556b2f" name="DarkOliveGreen"/>
                                    <MakeTable color="#808000" name="Olive"/>
                                    <MakeTable color="#6b8e23" name="OliveDrab"/>
                                    <MakeTable color="#9acd32" name="YellowGreen"/>
                                    <MakeTable color="#32cd32" name="LimeGreen"/>
                                    <MakeTable color="#00ff00" name="Lime"/>
                                    <MakeTable color="#7cfc00" name="LawnGreen"/>
                                    <MakeTable color="#7fff00" name="Chartreuse"/>
                                    <MakeTable color="#adff2f" name="GreenYellow"/>
                                    <MakeTable color="#00ff7f" name="SpringGreen"/>
                                    <MakeTable color="#00fa9a" name="MediumSpringGreen"/>
                                    <MakeTable color="#90ee90" name="LightGreen"/>
                                    <MakeTable color="#98fb98" name="PaleGreen"/>
                                    <MakeTable color="#8fbc8f" name="DarkSeaGreen"/>
                                    <MakeTable color="#66cdaa" name="MediumAquamarine"/>
                                    <MakeTable color="#3cb371" name="MediumSeaGreen"/>
                                    <MakeTable color="#2e8b57" name="SeaGreen"/>
                                    <MakeTable color="#228b22" name="ForestGreen"/>
                                    <MakeTable color="#008000" name="Green"/>
                                    <MakeTable color="#006400" name="DarkGreen"/>
                                    <MakeTable color="#00ffff" name="Aqua"/>
                                    <MakeTable color="#00ffff" name="Cyan"/>
                                    <MakeTable color="#e0ffff" name="LightCyan"/>
                                    <MakeTable color="#afeeee" name="PaleTurquoise"/>
                                    <MakeTable color="#7fffd4" name="Aquamarine"/>
                                    <MakeTable color="#40e0d0" name="Turquoise"/>
                                    <MakeTable color="#48d1cc" name="MediumTurquoise"/>
                                    <MakeTable color="#00ced1" name="DarkTurquoise"/>
                                    <MakeTable color="#20b2aa" name="LightSeaGreen"/>
                                    <MakeTable color="#5f9ea0" name="CadetBlue"/>
                                    <MakeTable color="#008b8b" name="DarkCyan"/>
                                    <MakeTable color="#008080" name="Teal"/>
                                    <MakeTable color="#b0c4de" name="LightSteelBlue"/>
                                    <MakeTable color="#b0e0e6" name="PowderBlue"/>
                                    <MakeTable color="#add8e6" name="LightBlue"/>
                                    <MakeTable color="#87ceeb" name="SkyBlue"/>
                                    <MakeTable color="#87cefa" name="LightSkyBlue"/>
                                    <MakeTable color="#00bfff" name="DeepSkyBlue"/>
                                    <MakeTable color="#1e90ff" name="DodgerBlue"/>
                                    <MakeTable color="#6495ed" name="CornflowerBlue"/>
                                    <MakeTable color="#4682b4" name="SteelBlue"/>
                                    <MakeTable color="#4169e1" name="RoyalBlue"/>
                                    <MakeTable color="#0000ff" name="Blue"/>
                                    <MakeTable color="#0000cd" name="MediumBlue"/>
                                    <MakeTable color="#00008b" name="DarkBlue"/>
                                    <MakeTable color="#000080" name="Navy"/>
                                    <MakeTable color="#191970" name="MidnightBlue"/>
                                    <MakeTable color="#ffc0cb" name="Pink"/>
                                    <MakeTable color="#ffb6c1" name="LightPink"/>
                                    <MakeTable color="#ff69b4" name="HotPink"/>
                                    <MakeTable color="#ff1493" name="DeepPink"/>
                                    <MakeTable color="#db7093" name="PaleVioletRed"/>
                                    <MakeTable color="#c71585" name="MediumVioletRed"/>
                                    <MakeTable color="#e6e6fa" name="Lavender"/>
                                    <MakeTable color="#d8bfd8" name="Thistle"/>
                                    <MakeTable color="#dda0dd" name="Plum"/>
                                    <MakeTable color="#ee82ee" name="Violet"/>
                                    <MakeTable color="#da70d6" name="Orchid"/>
                                    <MakeTable color="#ff00ff" name="Fuchsia"/>
                                    <MakeTable color="#ff00ff" name="Magenta"/>
                                    <MakeTable color="#ba55d3" name="MediumOrchid"/>
                                    <MakeTable color="#9370db" name="MediumPurple"/>
                                    <MakeTable color="#8a2be2" name="BlueViolet"/>
                                    <MakeTable color="#9400d3" name="DarkViolet"/>
                                    <MakeTable color="#9932cc" name="DarkOrchid"/>
                                    <MakeTable color="#8b008b" name="DarkMagenta"/>
                                    <MakeTable color="#800080" name="Purple"/>
                                    <MakeTable color="#4b0082" name="Indigo"/>
                                    <MakeTable color="#483d8b" name="DarkSlateBlue"/>
                                    <MakeTable color="#6a5acd" name="SlateBlue"/>
                                    <MakeTable color="#7b68ee" name="MediumSlateBlue"/>
                                    <MakeTable color="#663399" name="RebeccaPurple"/>
                                    <MakeTable color="#dcdcdc" name="Gainsboro"/>
                                    <MakeTable color="#d3d3d3" name="LightGray"/>
                                    <MakeTable color="#c0c0c0" name="Silver"/>
                                    <MakeTable color="#a9a9a9" name="DarkGray"/>
                                    <MakeTable color="#808080" name="Grey"/>
                                    <MakeTable color="#696969" name="DimGrey"/>
                                    <MakeTable color="#778899" name="LightSlateGray"/>
                                    <MakeTable color="#708090" name="SlateGray"/>
                                    <MakeTable color="#2F4F4F" name="DarkSlateGray"/>
                                    <MakeTable color="#000000" name="Black"/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    };
}


export default HTMLColorDictionary;