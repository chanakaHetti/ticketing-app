import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
  if (!req.session?.jwt) { // if(!req.session?.jwt) === if(!req.session || !req.session.jwt)
    return res.send({ currentUser: null });
  }

  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY! // process.env.JWT_KEY skip error of process.env not undefined
    );
    res.send({ currentUser: payload });
  } catch (err) {
    res.send({ currentUser: null });
  } 
});

export { router as currentUserRouter }
