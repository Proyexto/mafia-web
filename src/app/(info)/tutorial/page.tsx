import { TextTitle, MainLayout, Text, TextSubTitle } from "@/components";

export default function Home() {
  return (
    <MainLayout>
      <header className="bg-background bg-fixed parala flex w-full min-h-[60vh] bg-contain bg-center bg-no-repeat bg-[#a41628]"/>
      <main className="flex bg-bg-primary min-h-[40vh] justify-center border-t border-gray-600">
        <section className="flex flex-col items-center pt-16 pb-28 gap-7">
          <TextTitle className="w-3/4">Tutorial</TextTitle>
          <TextSubTitle className="w-3/4">Temática</TextSubTitle>
          <Text className="w-3/4 mb-3">En el juego existen 2 bandos: el de los ciudadanos y la mafia. La mafia intenta eliminar a todos los ciudadanos mientras que ellos intentan identificar quien es la mafia. Se necesitarán al menos unas 5  personas para jugar, cuantas más personas más divertido va ser el juego.</Text>
          <Text className="w-3/4 mb-3">Cuando se va a crear la sala los roles se asignaran de (forma aleatoria) mafia, policía, doctor y civiles. El juego comienza con una fase nocturna.</Text>
          <TextSubTitle className="w-3/4">Fase de noche</TextSubTitle>
          <Text className="w-3/4 mb-3">Durante la fase de noche el mafia va a elegir a quién va a eliminar, gana el mafia una vez que queden la misma cantidad de ciudadanos como de mafia.
          También el médico, elegirá una persona para salvarla (se puede elegir a el mismo)</Text>
          <TextSubTitle className="w-3/4">Fase de día</TextSubTitle>
          <Text className="w-3/4 mb-3">Durante la fase de día todos los jugadores en la sala sacan conclusiones o pistas para poder saber quien podría llegar a ser la mafia.</Text>
          <Text className="w-3/4 mb-3">Continúa la partida por fases de noche y de día hasta que la Mafia o los ciudadanos ganen. Donde los mafiosos ganan cuando sea la misma cantidad que los ciudadanos y los ciudadanos ganan cuando no hayan quedado ningún mafia</Text>
          <Text className="w-3/4 mb-3">Este viene siendo un juego de roles realizar engaños, estrategia y comunicación entre las personas que intentan descubrir quiénes pueden o puede llegar a ser la Mafia. ¡Mucha suerte y diviertanse en este gran juego!</Text>
        </section>
      </main>
    </MainLayout>
  );
}
