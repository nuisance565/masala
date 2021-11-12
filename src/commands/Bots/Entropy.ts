import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            description: 'Displays the info',
            category: 'bots',
            usage: `${client.config.prefix}entropy`,
            baseXp: 100
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        return void M.reply(
            `💀 *support group* 💀\n\n🍀 *Description:* Join our support group to learn\n\n🌐 *URL:* https://chat.whatsapp.com/IRbdcY5Kxr0IIxfWhlpfr4\n`
        ).catch((reason: Error) => M.reply(`an error occurred, Reason: ${reason}`))
    }
}
