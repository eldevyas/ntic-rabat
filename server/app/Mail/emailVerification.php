<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class emailVerification extends Mailable
{
    use Queueable, SerializesModels;
    public $email;
    public $token;
    public $code;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($email, $token, $code)
    {
        $this->email = $email;
        $this->token = $token;
        $this->code = $code;
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: 'Email Verification',
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function build()
    {
        return $this->view('mail.verificationEmail')->with([
            'email' => $this->email,
            'token' => $this->token,
            'code' => $this->code,
        ]);
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }
}
