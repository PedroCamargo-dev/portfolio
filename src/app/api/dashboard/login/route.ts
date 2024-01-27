import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utils/config/db/firebase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const token = await user.getIdToken();
    const refreshToken = user.refreshToken;

    return NextResponse.json({ token, refreshToken });
  } catch (error: any) {
    if (error.code === "auth/user-not-found") {
      return NextResponse.json({
        status: 404,
        message: "Usuário não encontrado!",
      });
    }

    if (error.code === "auth/wrong-password") {
      return NextResponse.json({
        status: 401,
        message: "Usuário ou senha inválidos",
      });
    }

    if (error.code === "auth/user-disabled") {
      return NextResponse.json({
        status: 403,
        message: "Seu usuário foi desabilitado",
      });
    }

    if (error.code === "auth/invalid-email") {
      return NextResponse.json({
        status: 400,
        message: "Usuário ou senha inválidos",
      });
    }

    if (error.code === "auth/invalid-password") {
      return NextResponse.json({
        status: 400,
        message: "Usuário ou senha inválidos",
      });
    }

    if (error.code === "auth/invalid-credential") {
      return NextResponse.json({
        status: 400,
        message: "Usuário ou senha inválidos",
      });
    }

    if (error.code === "auth/network-request-failed") {
      return NextResponse.json({
        status: 500,
        message: "Erro de conexão",
      });
    }
  }
}
