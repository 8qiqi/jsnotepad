module.exports = function(grunt){
  grunt.initConfig({
    'hello-world':{}
  });
  grunt.registerTask('hello-world','My "asyncfoo" task.',function(){
    grunt.log.writeln('hello world');
  });
  grunt.registerTask('default',['hello-world']);
};
