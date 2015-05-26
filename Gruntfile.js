module.exports = function(grunt) {
  grunt.initConfig({
    'build-electron-app': {
        options: {
            platforms: ["darwin", "win64"]
        }
    }
  });

  // Load the grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-electron-app-builder');
};

// Register the task to install nodewebkit dependencies.
grunt.task.registerTask('install-dependencies', function() {
  var exec = require('child_process').exec,
      callback = this.async();

  exec('npm install --production', { cwd: './www' }, function(e, stdout, stderr) {
    console.log(stdout);
    callback();
  });
});

grunt.registerTask('default', ['install-dependencies']);
