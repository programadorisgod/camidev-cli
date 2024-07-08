import { playBulletForce } from "../FunctionOptions/bulletForce.js";
import { playMinecraft } from "../FunctionOptions/minecraft.js";
import { watchMidudev } from "../FunctionOptions/watchMidudev.js";

const options = {
    1: 'Jugar mine',
    2: 'Ver el directo Midudev',
    3: 'Jugar bullet force'
}


export const switchOptions = (choice, spinner) => {
    switch (choice) {
        case options[1]:
            playMinecraft(spinner)
            break;
        case options[2]:
            watchMidudev(spinner)
            break;
        case options[3]:
            playBulletForce(spinner)
            break;
        default:
            break;
    }

}