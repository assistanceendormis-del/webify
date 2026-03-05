<?php
/**
 * Webify Meaux — Traitement du formulaire de contact
 * Hébergement O2switch — PHP mail()
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

/* Seules les requêtes POST sont acceptées */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée.']);
    exit;
}

/* ---- Récupération et nettoyage des champs ---- */
function clean(string $val): string {
    return htmlspecialchars(strip_tags(trim($val)), ENT_QUOTES, 'UTF-8');
}

$nom         = clean($_POST['nom']         ?? '');
$tel         = clean($_POST['tel']         ?? '');
$email_client = clean($_POST['email']      ?? '');
$type        = clean($_POST['type']        ?? '');
$budget      = clean($_POST['budget']      ?? '');
$delai       = clean($_POST['delai']       ?? '');
$ville       = clean($_POST['ville']       ?? '');
$description = clean($_POST['description'] ?? '');

/* ---- Validation minimale ---- */
$errors = [];

if (empty($nom))          $errors[] = 'Le nom est requis.';
if (empty($tel))          $errors[] = 'Le téléphone est requis.';
if (empty($email_client)) $errors[] = "L'email est requis.";
if (!filter_var($email_client, FILTER_VALIDATE_EMAIL)) $errors[] = 'Email invalide.';
if (empty($type))         $errors[] = 'Le type de projet est requis.';

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => implode(' ', $errors)]);
    exit;
}

/* ---- Construction du message ---- */
$to      = 'contact@webifymeaux.fr';
$subject = '=?UTF-8?B?' . base64_encode('[Webify Meaux] Nouvelle demande de devis — ' . $nom) . '?=';

$body  = "Nouvelle demande de devis reçue sur webify-meaux.fr\n";
$body .= str_repeat('=', 55) . "\n\n";
$body .= "Nom          : {$nom}\n";
$body .= "Téléphone    : {$tel}\n";
$body .= "Email        : {$email_client}\n";
$body .= "Ville        : " . ($ville ?: 'Non renseigné') . "\n\n";
$body .= "Type projet  : {$type}\n";
$body .= "Budget       : " . ($budget ?: 'Non défini') . "\n";
$body .= "Délai        : " . ($delai ?: 'Non défini') . "\n\n";
$body .= "Description  :\n" . ($description ?: 'Aucune description') . "\n\n";
$body .= str_repeat('=', 55) . "\n";
$body .= "Message envoyé depuis le formulaire de contact.\n";

$headers  = "From: noreply@webifymeaux.fr\r\n";
$headers .= "Reply-To: {$email_client}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

/* ---- Envoi ---- */
$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Message envoyé avec succès.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => "Erreur lors de l'envoi. Veuillez nous appeler directement."]);
}
