let born = prompt ('Enter the year you were born in:');
let year = parseInt (born);
let zodiac = (year - 4) % 12;
zodiac = Number (zodiac);
 switch (zodiac) {
    case 0:
         alert ('Your chinese zodiac sign is: RAT. Your personality is quick-witted, resourceful, versatile, kind.');
         break;
    case 1: 
        alert ('Your chinese zodiac sign is: OX. Your personality is diligent, dependable, strong, determined.');
        break;
    case 2: 
        alert ('Your chinese zodiac sign is: TIGER. Your personality is brave, confident, strong.');
        break;
    case 3: 
        alert ('Your chinese zodiac sign is: RABBIT. Your personality is quiet, elegant, kind, responsible.');
        break;
    case 4: 
        alert ('Your chinese zodiac sign is: DRAGON. Your personality is confident, intelligent, enthusiastic.');
        break;
    case 5: 
        alert ('Your chinese zodiac sign is: SNAKE. Your personality is enigmatic, intelligent, wise.');
        break;
    case 6: 
        alert ('Your chinese zodiac sign is: HORSE. Your personality is animated, active, energetic.');
        break;
    case 7: 
        alert ('Your chinese zodiac sign is: GOAT. Your personality is calm, gentle, sympathetic.');
        break;
    case 8: 
        alert ('Your chinese zodiac sign is: MONKEY. Your personality is sharp, smart, curious.');
        break;
    case 9: 
        alert ('Your chinese zodiac sign is: ROOSTER. Your personality is observant, hardworking, courageous.');
        break;
    case 10: 
        alert ('Your chinese zodiac sign is: DOG. Your personality is lovely, honest, prudent.');
        break;
    case 11: 
        alert ('Your chinese zodiac sign is: PIG. Your personality is compassionate, generous, diligent.');
        break;
    default:
        alert ('Error. Please enter a valid year');
 };