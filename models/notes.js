module.exports = (sequelize, DataTypes) => {
  const Notes = sequelize.define("notes", {
    owner: {
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    details: {
      type: DataTypes.STRING(2000),
      allowNull: false,
    },
    thoughts: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emotion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    emotionTiming: {
      type: DataTypes.STRING,
      allowNull: false,
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
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
  return Notes;
};
