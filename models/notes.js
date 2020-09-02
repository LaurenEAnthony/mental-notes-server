module.exports = (sequelize, DataTypes) => {
  const Notes = sequelize.define("note", {
    owner: {
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    details: {
      type: DataTypes.STRING(2000),
      allowNull: true,
    },
    thoughts: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emotion1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // timing1: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    intensity1: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    emotion2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // timing2: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    intensity2: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    emotion3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // timing3: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    intensity3: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    skillType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    skillDetail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    skillHelpful: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  });
  return Notes;
};
