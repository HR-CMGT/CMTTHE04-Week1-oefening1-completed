# PRG04 Week1 oefening 1 - completed

Werken met loops, semantische elementen

### OPDRACHT

Lees het **HTML en CSS voor Games** gedeelte uit de Quickstart

- Verwijder de fish en bubble uit de html file
- Voeg via javascript een vis en een bubble toe. Gebruik hierbij:
```
document.createElement(...)
document.body.appendChild(...)
```

### OPDRACHT

Gebruik de bestaande code in de js en css file:

- Zet de vis op een willekeurige plek in het scherm met een willekeurige kleur
- Zet de bubble op een willekeurige x positie

### OPDRACHT
- Maak een for loop die 100 visjes en bubbles toevoegt. deze moeten allemaal anders zijn!

### OPDRACHT
Lees de [documentatie van setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
- Gebruik nu setTimeout om nieuwe visjes en bubbles te plaatsen. 
- Lukt het je om te stoppen als er 100 visjes zijn?

```
setTimeout(functie, tijd)
```

### OPDRACHT
- Voeg een click event listener toe aan elk visje. 
- Als geklikt wordt geef je de geklikte vis een nieuwe class die een andere achtergrond heeft 
```
element.addEventListener("click", clickHandler)
element.classList.add("deadfish")
```
