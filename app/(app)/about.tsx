import { router } from 'expo-router';
import { MotiView } from 'moti';
import { Pressable, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import AnimatedStars from '@/components/shared/animated-stars';
import Text from '@/components/ui/text';
import { APP_VERSION } from '@/constants/app.constants';
import { hex2rgba } from '@/utils/ui.utils';
const AboutScreen = () => {
  const { styles } = useStyles(stylesheet);
  const goBack = () => {
    router.back();
  };
  return (
    <>
      <Pressable style={styles.container} onPress={goBack}>
        <AnimatedStars color="white" />
        <MotiView
          style={styles.content}
          from={{ translateY: 20, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ type: 'timing', duration: 500, delay: 300 }}
        >
          <Text size={27} weight="800" color="secondary" style={styles.title}>
            Sobre Nebulai
          </Text>
          <Text size={16} color="secondary" style={styles.title}>
            {`Versión: ${APP_VERSION}`}
          </Text>
          <View style={styles.divider} />
          <MotiView
            from={{ translateY: 20, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ type: 'timing', duration: 500, delay: 700 }}
          >
            <Text color="secondary">
              ¡Hola! Soy{' '}
              <Text weight="900" color="secondary">
                Agustín Oberg
              </Text>
              , el desarrollador de{' '}
              <Text weight="900" color="secondary">
                Nebulai
              </Text>
              . Me gustaría agradecerte desde el fondo de mi corazón por haber
              descargado la aplicación y confiar en ella. Para mí, Nebulai es un
              sueño que vengo construyendo con mucho esfuerzo, dedicación y
              pasión; y saber que estás ahí, usándola, me llena de una alegría
              inmensa. Cada persona que decide usar Nebulai{' '}
              <Text weight="900" color="secondary">
                no es solo un usuario más
              </Text>
              , es parte de este proyecto que nació con la idea de acompañar a
              todos en su camino de aprendizaje. Cada vez que alguien se suma,
              siento que estamos haciendo algo enorme juntos. Si hay algo que
              quieras contarme, alguna idea, comentario o hasta un simple '¡me
              ayudó un montón!', estaré siempre abierto a escucharte. Se que
              todavía queda mucho para mejorar y es mi intención hacerlo, y
              lograr que Nebulai sea una herramienta que realmente te haga la
              diferencia. Gracias, de verdad. Sin tu apoyo, todo esto no sería
              posible.{' '}
              <Text weight="900" color="secondary">
                ¡Vamos por más!
              </Text>
            </Text>
          </MotiView>
        </MotiView>
      </Pressable>
    </>
  );
};

export default AboutScreen;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: hex2rgba('#000000', 0.7),
    paddingHorizontal: theme.sizes.screenPadding,
  },
  content: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  title: {
    textAlign: 'center',
  },
  divider: {
    height: 0.3,
    backgroundColor: 'black',
    width: '100%',
    marginVertical: 12,
  },
}));
