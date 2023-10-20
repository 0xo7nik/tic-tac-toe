$(function () {
  $("#container table tr td").bind("click", set_sing)
})
let sing = "X"
let fields = [[-10, -10, -10],
              [-10, -10, -10],
              [-10, -10, -10]]

function set_sing(e) {
  let cell = $(e.target)
  let i = cell.attr("id")[0]
  let j = cell.attr("id")[1]
  if(fields[i][j] >= 0) return
  if(sing == "X"){
    cell.html(sing)
    sing = "O"
    fields[i][j] = 1
    let res = check_winner()
  }
  else{
    cell.html(sing)
    sing = "X"
    fields[i][j] = 0
    let res = check_winner()
  }
}
function check_winner() {
  let A = fields
  let h0 = A[0][0] + A[0][1] + A[0][2]
  let h1 = A[1][0] + A[1][1] + A[1][2]
  let h2 = A[2][0] + A[2][1] + A[2][2]
  let v0 = A[0][0] + A[1][0] + A[2][0]
  let v1 = A[0][1] + A[1][1] + A[2][1]
  let v2 = A[0][2] + A[1][2] + A[2][2]
  let d0 = A[0][0] + A[1][1] + A[2][2]
  let d1 = A[0][2] + A[1][1] + A[2][0]

  if (h0 == 0) return 0
  if (h0 == 3) return 1
  if (h1 == 0) return 0
  if (h1 == 3) return 1
  if (h2 == 0) return 0
  if (h2 == 3) return 1
  if (v0 == 0) return 0
  if (v0 == 3) return 1
  if (v1 == 0) return 0
  if (v1 == 3) return 1
  if (v2 == 0) return 0
  if (v2 == 3) return 1
  if (d0 == 0) return 0
  if (d0 == 3) return 1
  if (d1 == 0) return 0
  if (d1 == 3) return 1
return
}
