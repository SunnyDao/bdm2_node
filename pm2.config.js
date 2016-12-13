module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: "bdm_dev",
      script: "bin/www",
      env: {
        STAGE_ENV: "dev",
        PORT: 9005
      },
      watch:true,
      cwd: ".",
      instances: "1",
      exec_mode: "cluster"
    },
    {
      name: "bdm_test",
      script: "bin/www",
      env: {
        STAGE_ENV: "test",
        PORT: 9005
      },
      cwd: ".",
      instances: "max",
      exec_mode: "cluster"
    },
    {
      name: "bdm_sim",
      script: "bin/www",
      env: {
        STAGE_ENV: "sim",
        PORT: 9005
      },
      cwd: ".",
      instances: "max",
      exec_mode: "cluster"
    },
    {
      name: "bdm_prod",
      script: "bin/www",
      env: {
        STAGE_ENV: "prod",
        PORT: 9005
      },
      cwd: ".",
      instances: "max",
      exec_mode: "cluster"
    }
  ]
}
