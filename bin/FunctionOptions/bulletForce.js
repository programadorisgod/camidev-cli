import { exec } from "child_process"


export const playBulletForce = (spinner) => {
    const URL = 'https://www.1001juegos.com/juego/bullet-force-multiplayer'
    const command = `/usr/bin/firefox ${URL}`

    exec(command, (err, _std) => {
        if (err) spinner.fail('Error when opening Bullet Force')

        spinner.succeed(chalk.green("Done!"))
    })

}