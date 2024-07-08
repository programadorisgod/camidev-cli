import { exec } from "child_process";
import chalk from "chalk";

export const watchMidudev = (spinner) => {
    const URL = 'https://www.twitch.tv/midudev'
    const command = `/usr/bin/firefox ${URL}`

    exec(command, (err, _std) => {
        if (err) spinner.fail('Error when opening Midudev live')
        spinner.succeed(chalk.green("Done!"))

    })
}