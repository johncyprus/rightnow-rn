const Sequelize = require('sequelize');
// const {EC_DATABASE, EC_USERNAME, EC_HOST, EC_PASSWORD} = process.env;
const {DB_DATABASE, DB_USERNAME, DB_HOST, DB_PASSWORD} = require('../config');

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'postgres',
    logging: false
});

// const sequelize = new Sequelize(EC_DATABASE, EC_USERNAME, EC_PASSWORD, {
//   host: EC_HOST,
//   dialect: 'postgres',
//   logging: false
// });

sequelize.authenticate()
  .then(() => {
    console.log('DB connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Patients = sequelize.define('patients', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: {
      type: Sequelize.STRING(20),
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    lastname: {
      type: Sequelize.STRING(20),
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    sex: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    birthday: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    addressline1: {
      type: Sequelize.STRING(60),
      allowNull: false,
      validate: {
        len: [1, 60]
      }
    },
    addressline2: {
        type: Sequelize.STRING(60),
        allowNull: false,
        validate: {
          len: [1, 60]
        }
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false
    },
    zipcode: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    ethnicity: {
      type: Sequelize.STRING,
      allowNull: false
    },
    language: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    medicalhistory: {
        type: Sequelize.JSON
    }
}, {
    timestamps: false
});


const Pediatrics = sequelize.define('pediatric_nurses', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  hospital: {
      type: Sequelize.STRING
  },
  avatar: {
      type: Sequelize.STRING,
      allowNull: false
  },
  specialty: {
      type: Sequelize.STRING,
      defaultValue: 'Pediatrics'
  }
}, {
  timestamps: false
});

const Geriatrics = sequelize.define('geriatric_nurses', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    hospital: {
        type: Sequelize.STRING
    },
    avatar: {
        type: Sequelize.STRING,
        allowNull: false
    },
    specialty: {
        type: Sequelize.STRING,
        defaultValue: 'Geriatrics'
    }
  }, {
    timestamps: false
  });

  const Transplant = sequelize.define('transplant_nurses', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    hospital: {
        type: Sequelize.STRING
    },
    avatar: {
        type: Sequelize.STRING,
        allowNull: false
    },
    specialty: {
        type: Sequelize.STRING,
        defaultValue: 'Transplant'
    }
  }, {
    timestamps: false
  });

  const Cardiac = sequelize.define('cardiac_nurses', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    hospital: {
        type: Sequelize.STRING
    },
    avatar: {
        type: Sequelize.STRING,
        allowNull: false
    },
    specialty: {
        type: Sequelize.STRING,
        defaultValue: 'Cardiac'
    }
  }, {
    timestamps: false
  });

  const GeneralMedicine = sequelize.define('generalmedicine_nurses', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    hospital: {
        type: Sequelize.STRING
    },
    avatar: {
        type: Sequelize.STRING,
        allowNull: false
    },
    specialty: {
        type: Sequelize.STRING,
        defaultValue: 'General Medicine'
    }
  }, {
    timestamps: false
  });

  const Postpartum = sequelize.define('postpartum_nurses', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    hospital: {
        type: Sequelize.STRING
    },
    avatar: {
        type: Sequelize.STRING,
        allowNull: false
    },
    specialty: {
        type: Sequelize.STRING,
        defaultValue: 'Postpartum'
    }
  }, {
    timestamps: false
  });

  const Oncology = sequelize.define('oncology_nurses', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    hospital: {
        type: Sequelize.STRING
    },
    avatar: {
        type: Sequelize.STRING,
        allowNull: false
    },
    specialty: {
        type: Sequelize.STRING,
        defaultValue: 'Oncology'
    }
  }, {
    timestamps: false
  });


sequelize.sync()
  .then(() => {})
  .catch(error => {
    console.log('ERROR SYNCING:', error)
  })

module.exports = {
  sequelize: sequelize,
  Patients: Patients,
  Pediatrics: Pediatrics,
  Geriatrics: Geriatrics,
  Transplant: Transplant,
  Cardiac: Cardiac,
  GeneralMedicine: GeneralMedicine,
  Postpartum: Postpartum,
  Oncology: Oncology
};