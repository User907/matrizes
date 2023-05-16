var matriz = new Array();
var matriz1 = new Array();
var matriz2 = new Array();

var w = parseInt(prompt(" Digite o número de linha da primeira matriz"));
var x = parseInt(prompt(" Digite o número de colunas da primeira matriz"));
var y = parseInt(prompt(" Digite o número de linhas da segunda matriz"));
var z = parseInt(prompt(" Digite o número de colunas da segunda matriz"));

//Matriz 1

document.write(" <a><p> Matriz 1 </p></a> ");

document.write(" <table> ");
for(i=0; i<w;i++){

    var linha = " <tr> ";
    matriz.push([]);

    for(j=0; j<x;j++){
        matriz[i][j] = (parseInt(Math.random()*10));
        
        linha = linha + "<td>" + matriz[i][j] + "</td>";

    }
    linha = linha+"</tr>";

    document.write(linha);

}
document.write("</table>");

document.write("<br>");
document.write("<br>");
//Matriz 2

document.write(" <a><p> Matriz 2 </p></a> ");

document.write(" <table> ");

for(i=0; i<y;i++){

    var linha = " <tr> ";
    matriz1.push([]);

    for(j=0; j<z;j++){

        matriz1[i][j] = (parseInt(Math.random()*10));

        linha = linha + "<td>" + matriz1[i][j] + "</td>";

        
    }
    linha = linha+"</tr>";

    document.write(linha);

}

document.write("</table>");

document.write("<br>");
document.write("<br>");

if (w = y) {
//Subtração
document.write(" <a><p> Subtração </p></a> ");
document.write(" <table> ");

for(i=0; i<y;i++){

    var linha = " <tr> ";
    matriz2.push([]);

    for(j=0; j<z;j++){

        matriz2[i][j] = matriz[i][j] - matriz1[i][j];

        linha = linha + "<td>" + matriz2[i][j] + "</td>";

        
    }
    linha = linha+"</tr>";

    document.write(linha);

}

document.write("</table>");

document.write("<br>");
document.write("<br>");
//Adiçao
document.write(" <a><p> Adição </p></a> ");
document.write(" <table> ");

for(i=0; i<y;i++){

    var linha = " <tr> ";
    matriz2.push([]);

    for(j=0; j<z;j++){

        matriz2[i][j] = matriz[i][j] + matriz1[i][j];

        linha = linha + "<td>" + matriz2[i][j] + "</td>";

        
    }
    linha = linha+"</tr>";

    document.write(linha);

}

document.write("</table>");

console.table(matriz2);

}else{
    document.write(" <a><p>As matrizes tem dimensões diferentes</a></p> ")
}

console.table(matriz);

console.table(matriz1);

console.table(matriz2);

