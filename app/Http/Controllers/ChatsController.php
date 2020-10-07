<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatsController extends Controller
{
/* 
    public function __construct()
    {
        $this->middleware('auth');
    } */
    public function fetchMessages()
    {
        $this->middleware('auth');
        return Message::with('user')
        ->get();
    }
    public function deneme()
    {
        return Message::with('user')
        ->get();
    }

    public function addedMessages($id)
    {
        $this->middleware('auth');
        $message = Message::with('user')
        ->where('id',$id)
        ->get();
        return $message;
    }

    public function sendMessage(Request $request)
    {
        $this->middleware('auth');
        $user = Auth::user();

        $message = Message::create([
            'user_id' => $user['id'],
            'message' => $request['message']
        ]);
        $getMessages = $this->addedMessages($message['id']);    

        event(new MessageSent($getMessages));
        return ['status' => 'başarılı'];
    }
}
