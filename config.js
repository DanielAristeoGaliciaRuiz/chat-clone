
const configs={
    api:{
        port:process.env.PORT || 3000,
        host: process.env.HOST || 'http://localhost:3000',
        nodeEnv:process.env.NODE_ENV || 'development'
    },
    db:{
        development:{
            //Aquí van las configuraciones para la conexion con sequelize
            dialect:'postgres', 
            host:'localhost',
            port:5432,
            username:'postgres',
            password:'Yessiq12',
            database:'chat-db',
            define:{
                timestamps:true, //Para utilizar por defecto el created_at y update_at
                underscored:true,//Para convertir de camelCase a snake_case
                underscoredAll:true
            }
        },
        production:{
            //Aquí van las configuraciones para la conexion con sequelize
            dialect:'postgres',
            host:5432, //host de la base de datos
            username:'postgres',
            password:process.env.POSTGRES_PASSWORD,
            database:'chat-db',
            define:{
                timestamps:true,
                underscored:true,
                underscoredall:true
            },
            dialectOptions:{
                //configuraciones para seguridad. Pide un certificado ssl para evitar intercepciones de información mientras la info viaja de la db a el front
                ssl:{
                    require:true,
                    rejectUnauthorized:false
                }
            }
        },
        testing:{
            //Aquí van las configuraciones para la conexion con sequelize
            dialect:'postgres',
            host:5432, //host de la base de datos
            username:'postgres',
            password:process.env.POSTGRES_PASSWORD,
            database:'chat-db',
            define:{
                timestamps:true,
                underscored:true,
                underscoredall:true
            }
        }
    }
}

module.exports=configs