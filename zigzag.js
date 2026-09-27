var convert = function (s, numRows) {
    if(numRows === 1 || numRows >=s.length) {
        return s 
    }

    const rows = Array(numRows).fill("")
    // rows = ["", "", ""]

    let row = 0 
    let direction = 1 

    for( let i = 0; i < s.length; i++) {
        // rows[row] = "" + P => P 
        rows[row] = rows[row] + s[i]

        if( row === numRows - 1) {    // reach bottom, direction = -1 
            direction =-1 
        }


        if( row === 0) {
            direction =1 
        }


        row = row + direction 
        // row = 0 + 1 => 1 
        // row = 1 + 1 => 2 
        // row = numRows - 1 => so direction = -1 
        // row = 2 + -1 => 1 
        // row => 1 + -1 => 0 => direction = 1 
        


    }


    return rows.join("")
}