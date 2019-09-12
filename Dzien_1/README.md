# React Redux TypeScript

## Dzień 1
### Zadanie 1.

Stwórz komponent `Clock`. Jego zadaniem jest wyświetlanie aktualnej daty i godziny w czasie rzeczywistym.
- do wygenerowania aktualnej daty użyj obiektu ``` new Date(); ``` oraz odpowiednich metod służacych pobieraniu części składowych daty i godziny
- podziel twój komponent na subkomeponenty, tak aby każda ze składowych części daty była wyświetlana w osobnym komponencie. !!! Uwaga datę może utworzyć tylko raz. Przekaż obiekt daty do komponentów składniowych przy pomocy ```props```.</br>
-- Clock </br>
---- Year </br>
---- Month </br>
---- Day </br>
---- Hour </br>
---- Minute </br>
---- Second </br>
- Stwórz menu z przełącznikami daty na bazie tablicy: `[{city: "Paris", gmt: 0}, {city: "New York", gmt: -4}, { city: "Warsaw", gmt: 1}, {city: "Tokyo", gmt: 9 },{city: "Moscow", gmt: 3}]`. Poszczególny przełącznik powinien wyglądać mniej więcej tak: `<button data-time={el.gmt}>{el.city}</button>` oraz posiadać metodę `onClick`.
- Upewnij się, że po kliknięciu w przycisk component `Clock` pokazuje datę dla odpowiedniego miasta.

!!! Uwaga. Zwróć szczególną uwagę na kompozycję komponentów. Pamiętaj, że dane w React przekazujemy – zgodnie z architekturą Flux – w jednym kierunku z góry na dół.

### Zadanie 2.
Stwórz komponent "MathTest". Zadaniem komponentu jest wygenerowanie widoku dla Testu matematycznego.
- Wylosuj działanie matematyczne `["+", "-", "*", "/"]` oraz dwie liczby z zakresu od 1 do 10. Możesz to zrobić przy pomocy konstrukcji `Math.round(Math.random() * (max - min) + min)`
- Wylosuj także 3 błędne odpowiedzi i przetasuj je z prawidłową
- Stwórz obiekt użytkownika i zapisz w nim punktację, na początku 0.
- Stwórz formularz w którym zapytasz użytkownika o wynik działania oraz pozwolisz mu wpisać odpowiedź. Prawidłowa odpowiedć powoduje dodanie punktu, błędna odebranie.
- Daj użytkownikowi na odpowiedzi 1 min, po czym zablokuj grę.
- Ciesz się swoim refleksem matematycznym.

### Zadanie 3.
Stwórz komponent MemeGenerator. Połacz się z api https://api.imgflip.com/.
- Pobierz listę templatów z endpointu URL: https://api.imgflip.com/get_memes. Stwórz galerię templatów.
- Stwórz formularz w którym pozwolisz użytkownikowi na wybranie template dla mema a następnie dasz mu możliwość dodania tekstów do mema. Formularz powinien zawierać możliwość wyboru template (input type radio) oraz dwa inputy tekstowe.
- Wyświetl mema użytkownikowi strony
