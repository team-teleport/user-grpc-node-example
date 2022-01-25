import { getUserInfo } from "../service/userGrpcService";
import { Request, Response } from "express";

const getUserInfoByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      res.status(400).json({
        message: "유저 아이디를 보내주세요.",
      })
    }
    const userInfo = await getUserInfo(userId);
    res.status(200).json({
      userInfo
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "서버 내부 오류",
    })
  }
}

export { getUserInfoByUserId };