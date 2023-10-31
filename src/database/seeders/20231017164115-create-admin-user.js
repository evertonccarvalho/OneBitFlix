const bcrypt = require("bcrypt");

("use strict");

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("123456", 10);
    const existingAdmin = await queryInterface.sequelize.query("SELECT * FROM users WHERE email = :email", {
      replacements: { email: "admin@email.com" },
      type: queryInterface.sequelize.QueryTypes.SELECT,
    });

    if (existingAdmin.length === 0) {
      await queryInterface.bulkInsert("users", [
        {
          first_name: "Admin",
          last_name: "User",
          phone: "555-5555",
          birth: "1990-01-01",
          email: "admin@email.com",
          password: hashedPassword,
          role: "admin",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);
    } else {
      console.log("O usuário administrador já existe no banco de dados.");
    }
  },

  async down(queryInterface, Sequelize) {
    // A operação down pode permanecer a mesma, excluindo o usuário com base no email
    await queryInterface.bulkDelete("users", null, {
      where: { email: "admin@email.com" },
    });
  },
};
