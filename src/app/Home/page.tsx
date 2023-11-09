import { TextTitle, MainLayout, Text } from "@/components";

export default function Home() {
  return (
    <MainLayout>
      <header className="bg-background bg-fixed parala flex w-full min-h-[60vh] bg-contain bg-center bg-no-repeat bg-[#a41628]"/>
      <main className="flex bg-bg-primary min-h-[40vh] justify-center border-t border-gray-600">
        <section className="flex flex-col items-center pt-16 pb-36 gap-7">
          <TextTitle className="w-3/4">¿Qué es mafia?</TextTitle>
          <Text className="w-3/4">En el juego existen 2 bandos: el de los ciudadanos y la mafia. La mafia intenta eliminar a todos los ciudadanos mientras que ellos intentan identificar quien es la mafia. Se necesitarán al menos unas 5 personas para jugar, cuantas más personas más divertido va ser el juego.</Text>
          <Text className="w-3/4">Cuando se va a crear la sala los roles se asignaran de (forma aleatoria) mafia, policía, doctor y civiles. Y el juego transcurre por rondas de dia y noche hasta que todos los mafia sean eliminados o la cantidad de mafias sean igual que la de ciudadanos</Text>
        </section>
      </main>
    </MainLayout>
  );
}
