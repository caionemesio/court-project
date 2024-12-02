import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box className="flex bg-primary-main min-h-screen justify-center items-start pt-24">
      <div className="flex items-center space-x-20">
        <div className="flex flex-col space-y-4 w-1/2">
          <h1 className="text-6xl font-bold text-black max-w-lg">
            Agora você pode acompanhar e agendar nossa quadra!
          </h1>
          <p className="text-2xl text-black font-medium max-w-lg">
            Uma iniciativa de alunos que, através de um site, possamos ver os
            horários disponíveis da nossa quadra.
          </p>
          <button className="w-2/3 py-2 bg-[#004084] text-white text-2xl font-semibold rounded-lg hover:bg-blue-700 transition-all" >
            AGENDE AGORA!
          </button>
        </div>

        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/b523/9044/5159766f9a6b3a82b45eaaf0eff2d9cb?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ejOs24Kh0XXXkh94pXlQ1YngHZuWLErr0WeRPpqSqcH~tBHb8Zayq2u0oxKOVWqpqF7lseORb8rJ9lXjSgiyNH1JQDOudJiyqHzUfEYAzNOw0784tIvdJJ5WWEv6y2Kg~2-88H8KPjVNqdQQctMa542Bg~p6LYDlY6hkLbThMlOE81qhZwofjlvEujNx6qFPfXQBcOV~l3lDiEhsnKxd78WtMsfJLOEqDcGpEAEq545UktQZmsFRqV~IWvfqFuyg05ARr4Imv-j38aemybXe21f7Tpz2O8VYpJVmPaeLNGoZN6jYAvtPOedGSiCSSyWCWh7NhVSmBl-5gcfJ9SOlfA__"
            alt="Imagem da quadra"
            className="w-full rounded-3xl object-cover"

          />
        </div>
      </div>
    </Box>
  );
}
