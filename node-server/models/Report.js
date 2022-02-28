module.exports = (sequelize, DataTypes) => {
    return sequelize.define('report', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        accountId: {
            type: DataTypes.INTEGER,
        },
        fromDate: {
            type: DataTypes.DATE,
        },
        toDate: {
            type: DataTypes.DATE,
        }
    });
}
