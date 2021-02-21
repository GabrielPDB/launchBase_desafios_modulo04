module.exports = {
    age: function (timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
            age--
        }

        return age
    },
    graduation: function (graduation) {
        if (graduation == "highSchool") return "Ensino Médio Completo"
        if (graduation == "university") return "Ensino Superior Completo"
        if (graduation == "master") return "Mestrado"
        if (graduation == "doctorate") return "Doutorado"
    },
    class_type: function (class_type) {
        if (class_type == 'presential') return 'Presencial'
        if (class_type == 'remotely') return 'À distância'
    },
    date: function (timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()

        const month = `0${date.getUTCMonth() + 1}`.slice(-2)

        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }
    },
    grade: function (grade) {
        if (grade == "1EF") return "1° Ano do Ensino Fundamental"
        if (grade == "2EF") return "2° Ano do Ensino Fundamental"
        if (grade == "3EF") return "3° Ano do Ensino Fundamental"
        if (grade == "4EF") return "4° Ano do Ensino Fundamental"
        if (grade == "5EF") return "5° Ano do Ensino Fundamental"
        if (grade == "6EF") return "6° Ano do Ensino Fundamental"
        if (grade == "7EF") return "7° Ano do Ensino Fundamental"
        if (grade == "8EF") return "8° Ano do Ensino Fundamental"
        if (grade == "9EF") return "9° Ano do Ensino Fundamental"
        if (grade == "1EM") return "1° Ano do Ensino Médio"
        if (grade == "2EM") return "2° Ano do Ensino Médio"
        if (grade == "3EM") return "3° Ano do Ensino Médio"



    }
}