const ChessTable = ({entries,handle}) => {
    const [blacks,whites] = entries
    return (
        <table>
            <tr className="a">
                <td className="a1" onClick={handle} >   {blacks.towerR.icon}  </td>
                <td className="a2" onClick={handle}>   {blacks.horseR.icon}  </td>
                <td className="a3" onClick={handle} >   {blacks.bishopR.icon}  </td>
                <td className="a4" onClick={handle} >   {blacks.king.icon}  </td>
                <td className="a5" onClick={handle} >   {blacks.queen.icon}  </td>
                <td className="a6" onClick={handle} >   {blacks.bishopL.icon}  </td>
                <td className="a7" onClick={handle} >   {blacks.horseL.icon}  </td>
                <td className="a8" onClick={handle} >   {blacks.towerL.icon}  </td>
            </tr>
            <tr className="b">
                <td className="b1" onClick={handle} >   {blacks.pawn1.icon}  </td>
                <td className="b2" onClick={handle} >   {blacks.pawn2.icon}  </td>
                <td className="b3" onClick={handle} >   {blacks.pawn3.icon}  </td>
                <td className="b4" onClick={handle} >   {blacks.pawn4.icon}  </td>
                <td className="b5"onClick={handle}>   {blacks.pawn5.icon}  </td>
                <td className="b6"onClick={handle}>   {blacks.pawn6.icon}  </td>
                <td className="b7" onClick={handle}>   {blacks.pawn7.icon}  </td>
                <td className="b8" onClick={handle}>   {blacks.pawn8.icon}  </td>
            </tr>
            <tr className="c">
                <td className="c1"onClick={handle} >   {}  </td>
                <td className="c2"onClick={handle} >   {}  </td>
                <td className="c3"onClick={handle} >   {}  </td>
                <td className="c4"onClick={handle} >   {}  </td>
                <td className="c5"onClick={handle} >   {}  </td>
                <td className="c6"onClick={handle} >   {}  </td>
                <td className="c7"onClick={handle} >   {}  </td>
                <td className="c8"onClick={handle} >   {}  </td>
            </tr>
            <tr className="d">
                <td className="d1"onClick={handle} >   {}  </td>
                <td className="d2"onClick={handle} >   {}  </td>
                <td className="d3"onClick={handle} >   {}  </td>
                <td className="d4"onClick={handle} >   {}  </td>
                <td className="d5"onClick={handle} >   {}  </td>
                <td className="d6"onClick={handle} >   {}  </td>
                <td className="d7"onClick={handle} >   {}  </td>
                <td className="d8"onClick={handle} >   {}  </td>
            </tr>
            <tr className="e">
                <td className="e1"onClick={handle} >   {}  </td>
                <td className="e2"onClick={handle} >   {}  </td>
                <td className="e3"onClick={handle} >   {}  </td>
                <td className="e4"onClick={handle} >   {}  </td>
                <td className="e5"onClick={handle} >   {}  </td>
                <td className="e6"onClick={handle} >   {}  </td>
                <td className="e7"onClick={handle} >   {}  </td>
                <td className="e8"onClick={handle} >   {}  </td>
            </tr>
            <tr className="f">
                <td className="f1"onClick={handle} >   {}  </td>
                <td className="f2"onClick={handle} >   {}  </td>
                <td className="f3"onClick={handle} >   {}  </td>
                <td className="f4"onClick={handle} >   {}  </td>
                <td className="f5"onClick={handle} >   {}  </td>
                <td className="f6"onClick={handle} >   {}  </td>
                <td className="f7"onClick={handle} >   {}  </td>
                <td className="f8"onClick={handle} >   {}  </td>
            </tr>
            <tr className="g">
                <td className="g1"onClick={handle} >   {whites.pawn1.icon}  </td>
                <td className="g2"onClick={handle} >   {whites.pawn2.icon}  </td>
                <td className="g3"onClick={handle} >   {whites.pawn3.icon}  </td>
                <td className="g4"onClick={handle} >   {whites.pawn4.icon}  </td>
                <td className="g5"onClick={handle} >   {whites.pawn5.icon}  </td>
                <td className="g6"onClick={handle} >   {whites.pawn6.icon}  </td>
                <td className="g7"onClick={handle} >   {whites.pawn7.icon}  </td>
                <td className="g8"onClick={handle} >   {whites.pawn8.icon}  </td>
            </tr>
            <tr className="h">
                <td className="h1"onClick={handle} >   {whites.towerR.icon}  </td>
                <td className="h2"onClick={handle} >   {whites.horseR.icon}  </td>
                <td className="h3"onClick={handle} >   {whites.bishopR.icon}  </td>
                <td className="h4"onClick={handle} >   {whites.king.icon}  </td>
                <td className="h5"onClick={handle} >   {whites.queen.icon}  </td>
                <td className="h6"onClick={handle} >   {whites.bishopL.icon}  </td>
                <td className="h7"onClick={handle} >   {whites.horseL.icon}  </td>
                <td className="h8"onClick={handle} >   {whites.towerL.icon}  </td>
            </tr>
        </table>
    )
}
export default ChessTable
