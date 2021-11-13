import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'owner',
            description: 'Displays the info',
            category: 'bots',
            usage: `${client.config.prefix}infinity`,
            baseXp: 100
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        return void M.reply(
            ` *OWNER* \n\n🍀 *Contact:* GET READY TO MEET LIL MANIAC\n\n🌐 *URL:* https://wa.me/+27721753314\n`
        ).catch((reason: Error) => M.reply(`an error occurred, Reason: ${reason}`))
    }
}
