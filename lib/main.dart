import 'package:flutter/material.dart';

void main() => runApp(FitnessXApp());

class FitnessXApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'FitnessX App',
      theme: ThemeData(primarySwatch: Colors.deepPurple),
      initialRoute: '/',
      routes: {
        '/': (context) => HomePage(),
        '/detail': (context) => DetailPage(),
      },
    );
  }
}

class HomePage extends StatelessWidget {
  final List<String> imagePaths = List.generate(
    6,
    (index) => 'assets/images/image${index + 1}.jpg',
  );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('FitnessX')),
      body: ListView.builder(
        itemCount: imagePaths.length,
        itemBuilder: (context, index) {
          return GestureDetector(
            onTap: () {
              Navigator.pushNamed(context, '/detail', arguments: 'Treino ${index + 1}');
            },
            child: Card(
              margin: EdgeInsets.all(10),
              child: Column(
                children: [
                  Image.asset(imagePaths[index], fit: BoxFit.cover),
                  Padding(
                    padding: EdgeInsets.all(8),
                    child: Text('Treino ${index + 1}'),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}

class DetailPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final String title = ModalRoute.of(context)?.settings.arguments as String? ?? "Detalhes";

    return Scaffold(
      appBar: AppBar(title: Text(title)),
      body: Center(child: Text('Página de detalhes para: $title')),
    );
  }
}
