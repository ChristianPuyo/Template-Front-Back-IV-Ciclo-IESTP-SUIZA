const sequelize = require('../db')

//Importar modelos
const Student = require('./Student') 
const Course = require('./Course')
const User = require('./User')

const db ={
    sequelize,
    Student,
    Course,
    User
    //Agregar más módelos aquí.
}

//Relación: Un usuario puede tener muchos estudiantes
User.hasMany(Student,{foreignKey: 'userId'})
// Relación: Un estudiante solo puede tener un usuario.
Student.belongsTo(User,{foreignKey: 'userId'})

module.exports = db
