/**
 * @Author: Clem
 * @Date:   2018-02-12T14:13:32+01:00
 * @Last modified by:   Clem
 * @Last modified time: 2018-02-12T14:13:32+01:00
 */
let count_coussin=-1
function myFunctionCoussin()
{
	count_coussin+=1
	var container = document.getElementById("coussin")
	if (count_coussin > 0)
	{
		while (container.childElementCount > 5)
		{
			var divHaut = document.getElementById("coussin"); 
			var divInterne = document.getElementById("letter"); 
			var func = divHaut.removeChild(divInterne);
		}
	}

	var realInput=document.getElementById("baby_input").value /*nous allons faire de l'input un input traitable*/
	let alph = "abcdefghijklmnopqrstuvwxyz -'"
	let aLPH = "ABCDEFGHIJKLMNOPQRSTUVWXYZ -'"
	let input=""
	let input1=""
	for (let i=0; i<realInput.length; i++)
	{
		for (let j=0; j<29; j++)
		{
			if (realInput.charAt(i) == alph.charAt(j) || realInput.charAt(i) == aLPH.charAt(j)) 
			{
				input+=alph.charAt(j)
			}
			
		}
		if (realInput.charAt(i)=='ç')      /*gestion du cas cédille (devient c pour des raisons ésthétiques*/
		{
				input+="c"
		}
		if (realInput.charAt(i)=='é')      /*gestion du cas "et" (devient e pour des raisons ésthétiques*/
		{
				input+="e"
		}
		
	}
	
	if (input.length > 30)
	{
		alert("Trop de caractères ! N'hésitez pas à nous contacter directement si vous avez la moindre question")
		input=""
	}

	for (let k=0; k<input.length; k++)
	{
		if (input.charAt(k)=='a')
		{
			var img = document.createElement('img')
			img.src = 'images/A_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='b')
		{
			var img = document.createElement('img')
			img.src = 'images/B_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='c')
		{
			var img = document.createElement('img')
			img.src = 'images/C_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='d')
		{
			var img = document.createElement('img')
			img.src = 'images/D_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='e')
		{
			var img = document.createElement('img')
			img.src = 'images/E_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='f')
		{
			var img = document.createElement('img')
			img.src = 'images/F_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='g')
		{
			var img = document.createElement('img')
			img.src = 'images/G_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='h')
		{
			var img = document.createElement('img')
			img.src = 'images/H_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='i')
		{
			var img = document.createElement('img')
			img.src = 'images/I_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='j')
		{
			var img = document.createElement('img')
			img.src = 'images/J_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='k')
		{
			var img = document.createElement('img')
			img.src = 'images/K_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='l')
		{
			var img = document.createElement('img')
			img.src = 'images/L_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='m')
		{
			var img = document.createElement('img')
			img.src = 'images/M_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='n')
		{
			var img = document.createElement('img')
			img.src = 'images/N_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='o')
		{
			var img = document.createElement('img')
			img.src = 'images/O_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='p')
		{
			var img = document.createElement('img')
			img.src = 'images/P_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='q')
		{
			var img = document.createElement('img')
			img.src = 'images/Q_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='r')
		{
			var img = document.createElement('img')
			img.src = 'images/R_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='s')
		{
			var img = document.createElement('img')
			img.src = 'images/S_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='t')
		{
			var img = document.createElement('img')
			img.src = 'images/T_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='u')
		{
			var img = document.createElement('img')
			img.src = 'images/U_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='v')
		{
			var img = document.createElement('img')
			img.src = 'images/V_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='w')
		{
			var img = document.createElement('img')
			img.src = 'images/W_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='x')
		{
			var img = document.createElement('img')
			img.src = 'images/X_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='y')
		{
			var img = document.createElement('img')
			img.src = 'images/Y_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='z')
		{
			var img = document.createElement('img')
			img.src = 'images/Z_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)==' ')
		{
			var img = document.createElement('img')
			img.src = 'images/Space_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=="'")
		{
			var img = document.createElement('img')
			img.src = 'images/_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
		else if (input.charAt(k)=='-')
		{
			var img = document.createElement('img')
			img.src = 'images/dash_letter50x50.png';
			img.id ="letter"
			document.getElementById('coussin').appendChild(img);
		}
	}
	/*ajout de la main du bébé*/
	
}