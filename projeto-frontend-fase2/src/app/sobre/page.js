import { Box, Typography } from "@mui/material";
import styles from "./sobre.module.css";

export default function Sobre() {
  return (
    <>
        <Box
          className={styles.about}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            backgroundColor: "#f5f5f5",
            padding: { md: 20, xs: 5 },
            textAlign: "center",
            gap: 10,
          }}
        >
          <Box>
            <img
              src="/television.png"
              alt="Sobre"
              className={styles.aboutImage}
            />
          </Box>
          <Box>
            <Typography
              variant="h4"
              fontWeight="semibold"
              sx={{
                mb: 2,
                textTransform: "uppercase",
                background:
                "linear-gradient(80deg, #ef6c00, #ffbf00ff, #ef5000ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "1.6rem", md: "2.2rem"}
              }}
            >
              Sobre o Projeto
            </Typography>
            <Typography variant="h6">
              Este é um projeto de gerenciamento de séries assistidas com React
              para a Disciplina de Desenvolvimento Frontend.
            </Typography>
            <Typography>
              Aqui você pode cadastrar, visualizar, editar e excluir séries
              assistidas.
            </Typography>
          </Box>
        </Box>
    </>
  );
}
