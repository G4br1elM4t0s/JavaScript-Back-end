import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (
      await prisma.user.findUnique({
        where: {
          email: email,
        },
      })
    ) {
      return res.status(400).json({ error: "User already exists" });
    }

    const user = await prisma.user.create({ 
        data:{
          name,
          email,
          password
        }
     });

    return res.json(user);
  } catch (err) {
    return res.status(400).send({ error: "Registration failed" });
  }
});

export { router };
