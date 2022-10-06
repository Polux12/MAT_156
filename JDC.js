


function menor() {
	var num = parseInt(document.getElementById("numero").value);
	var men = 10000;
	while (num > 0) 
	{
		mod = num % 10
		num = Math.trunc(num/10)
		if (mod < men) 
		{
			men = mod
		}
	}	
	document.getElementById("resmenor").innerHTML = men;
}

function mayor() {
	var num = parseInt(document.getElementById("numero").value);
	var may = 0;
	while (num > 0) 
	{
		mod = num % 10
		num = Math.trunc(num/10)
		if (mod > may) 
		{
			may = mod
		}
	}	
	document.getElementById("resmayor").innerHTML = may;
}

function Numero_Moderno() {
	var num = parseInt(document.getElementById("numero").value);
	var count = 0;
	var mayor = -100;
	var Aux = num;
	var j = 0;
	var h = 0;

	for (var i=0; i<9; i++) 
	{
		
		while (num > 0) 
		{
			mod = num % 10
			num = Math.trunc(num/10)

			if (mod == i) 
			{
				count = count + 1
				j = i
			}			
		}
		num = Aux
		if (count > mayor) {
			mayor = count
			h = j
		}
		count = 0
	
	}
			
	document.getElementById("resmoderno").innerHTML = h;
}


function triangulo() {
	var lim = parseInt(document.getElementById("filas").value);
	if (1 < lim){
		var a = 1;
		document.getElementById("fila1").innerHTML = (a)+"---"+(a);
	}

	if (2 < lim){
		var b = (a + a);
		document.getElementById("fila2").innerHTML = "1"+"---"+(b)+"---"+"1";
	}

	if (3 < lim){
		var c = (b + 1);
		document.getElementById("fila3").innerHTML = "1"+"---"+(c)+"---"+(c)+"---"+"1";
	}

	if (4 < lim){
		var d = (c + 1);
		var d0 = (c + c);
		document.getElementById("fila4").innerHTML = "1"+"---"+(d)+"---"+(d0)+"---"+(d)+"---"+"1";
	}

	if (5 < lim){
		var e = (d + 1);
		var e0 = (d + d0);
		document.getElementById("fila5").innerHTML = "1"+"---"+(e)+"--"+(e0)+"--"+(e0)+"--"+(e)+"---"+"1";
	}

	if (6 < lim){
		var f = (e + 1);
		var f0 = (e + e0);
		var f1 = (e0 + e0);
		document.getElementById("fila6").innerHTML = "1"+"---"+(f)+"--"+(f0)+"--"+(f1)+"--"+(f0)+"--"+(f)+"---"+"1";
	}
}

function rotar() {
	var N = parseInt(document.getElementById("numero0").value); 
	var n1 = 0;
	var nuevo = 0;
	var c = 0;
	while (N > 0) 
	{
		b = N % 10
		N = Math.trunc(N / 10)
		if ((b % 2) == 0) 
		{
			a = N % 10
			N = Math.trunc(N / 10)
			if (N == 0) 
			{
				if ((a % 2) == 0) 
				{
					nuevo += (a*(10**(n1-c)))
                	n1 += 1
                	nuevo += (b*(10**(n1-c)))
                	break
				}
				else 
				{
					nuevo += (b*(10**(n1-c)))
                	n1 += 1
                	nuevo += (a*(10**(n1-c)))
                	break
				}
			}

			if ((a % 2) == 0) 
			{
				nuevo += (a*(10**(n1-c)))
            	N = (N * 10) + b
            	n1 += 1
            	c = 0
			} 
			else 
			{
				c += 1
            	nuevo += (a*(10**(n1+1)))
            	N = (N * 10) + b
            	n1 += 1
			}		
		}
		else 
		{
			nuevo += (b*(10**n1))
        	n1 += 1
		}



	}
	document.getElementById("rotado").innerHTML = nuevo;
}