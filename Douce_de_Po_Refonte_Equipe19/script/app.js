/**
 * @Author: Clem
 * @Date:   2018-02-12T14:13:32+01:00
 * @Last modified by:   Clem
 * @Last modified time: 2018-02-12T14:13:32+01:00
 */
function myFunctionCoussin()
{
	var realInput=document.getElementById("baby_input").value /*nous allons faire de l'input un input traitable*/
	let alph = "abcdefghijklmnopqrstuvwxyz"
	let aLPH = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	let input=""
	for (let i=0; i<realInput.length; i++)
	{
		for (let j=0; j<26; j++)
		{
			if (realInput.charAt(i) == alph.charAt(j) || realInput.charAt(i) == aLPH.charAt(j))
			{
				input+=alph.charAt(j)
			}
			
		}
		if (realInput.charAt(i)=='ç')      /*gestion des cas particuliers*/
		{
				input+="c"
		}
	}
	/*nous allons imprimer le nom du bébé sur le coussin*/
	for (let k=0; k<8; k++)
	{
		
	}
	if (input=="b")
	{
		var img = document.createElement('img')
		img.src = 'images/Z_letter50x50.png';
		document.getElementById('coussin').appendChild(img);
		/*img.*/
	}
	
	/*document.getElementById("coussin").innerHTML="<img src='../images/A_letter.png' />";*/
}