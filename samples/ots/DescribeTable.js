var ots = require('./ots');

ots.describeTable({
      instance_name: 'chylvina',
      table_name: "table1"
    },
    function (err, data) {
      if (err) {
        console.log('error:', err);
        return;
      }

      console.log('success:', data);
    });
