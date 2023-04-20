import User from "../models/UserModels.js";

export const verifyUser = async(req, res, next) =>{
    if (!req.session.userId) {
        return res.status(401).json({msg: "Mohon login ke akun Anda!!!"});
    } else{
        next()
    }
    const user = await User.findOne({
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    req.userId = user.id;
    req.role = user.role;
    next();
}

export const adminOnly = async(req, res, next) =>{
    const user = await User.findOne({
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    if (user.role !== "admin") return res.status(403).json({msg: "Ini hanya boleh diakses oleh Admin"})
    req.userId = user.id;
    req.role = user.role;
    next();
}
export const checkLogin = (req, res, next) => {
    if (req.session.userId) {
      // Jika pengguna telah login, arahkan ke halaman lain
      res.redirect('/dashboard');
    } else {
      // Jika pengguna belum login, lanjutkan eksekusi ke middleware berikutnya
      next();
    }
  };

const requireAuth = (req, res, next) => {
    // Cek apakah session sudah terisi atau belum
    if (req.session.user) {
      next();
    } else {
      res.redirect('/login');
    }
  };
  
 export default requireAuth;