const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = app => {
  const multerConfig = {
    dest: path.resolve(__dirname, '..', '..', 'temp', 'uploads'),
    storage: multer.diskStorage({
      destination: (req, file, callBack) => {
        callBack(null, path.resolve(__dirname, '..', '..', 'temp', 'uploads'))
      },
      filename: (req, file, callBack) => {
        crypto.randomBytes(16, (err, hash) => {
          if(err) callBack(err);

          const filename = `${hash.toString('hex')}-${file.originalname}`;
          callBack(null, filename);
        })
      },
    }),
    limits: {
      fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, callBack) => {
      const allowedMimes = [
        "image/jpeg",
        "image/pjpeg",
        "image/png",
        "image/gif",
      ];

      if(allowedMimes.includes(file.mimetype)) {
        callBack(null, true);
      } else {
        callBack(new Error('Invalid file type.'))
      }
    },
  }

  return { multerConfig }
}