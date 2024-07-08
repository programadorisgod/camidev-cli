import chalk from "chalk"
import { exec, spawn } from "child_process"

export const playMinecraft = (spinner) => {
    const pathLauncher = 'SKlauncher-3.2.8.jar'

    const minecraftProcess = spawn('java', ['-jar', pathLauncher], {
        detached: true,
        stdio: 'ignore'
    })

    minecraftProcess.unref()

    spinner.succeed(chalk.green('Running Minecraft...'))


    setTimeout(() => {
        console.log(chalk.blue("The Minecraft launcher should now be open."));
        console.log(chalk.yellow("You can close this window if you wish"));
    }, 2000);

    minecraftProcess.on('error', (error) => {
        spinner.fail(chalk.red(`Error starting Minecraft: ${error.message}`));
    })

}