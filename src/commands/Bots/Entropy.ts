import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'nuisance',
            description: 'Displays the info',
            category: 'bots',
            usage: `${client.config.prefix}entropy`,
            baseXp: 100
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        return void M.reply(
            `💀 *nuisance* 💀\n\n🍀 *Description:* The Only WhatsApp Bot With Multi-Device Support\n\n🌐 *URL:* https://github.com/lloyd4565/Nuisance-aq\n`
        ).catch((reason: Error) => M.reply(`an error occurred, Reason: ${reason}`))
    }
}
