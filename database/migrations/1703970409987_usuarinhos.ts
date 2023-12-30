

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddFieldsToUsers extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('nome')
      table.string('cpf')
      table.string('senha')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumns('nome', 'cpf', 'senha')
    })
  }
}
